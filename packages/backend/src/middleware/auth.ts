import { ClerkExpressRequireAuth, ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { clerkClient, EmailAddress } from '@clerk/clerk-sdk-node';

const prisma = new PrismaClient();

export const requireAuth = ClerkExpressRequireAuth({
  onError: (error) => {
    return { status: 401, message: 'Unauthorized', error };
  },
});

export const withAuth = ClerkExpressWithAuth({});

export const requireAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.auth;
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  let user = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (!user) {
    const clerkUser = await clerkClient.users.getUser(userId);
    const newUser = await prisma.user.create({
      data: {
        clerkId: userId,
        email: clerkUser.emailAddresses.find((e: EmailAddress) => e.id === clerkUser.primaryEmailAddressId)?.emailAddress || '',
        name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || 'Unknown',
        role: (clerkUser.publicMetadata.role as string) || 'user',
      },
    });
    req.user = newUser;
  } else if (user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: Admin access required' });
  } else {
    req.user = user;
  }

  next();
};

// Extend Express Request type to include user and auth
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        clerkId: string;
        email: string;
        name: string | null;
        role: string;
      };
      auth: {
        userId: string | null;
        sessionId: string | null;
        [key: string]: any;
      };
    }
  }
}