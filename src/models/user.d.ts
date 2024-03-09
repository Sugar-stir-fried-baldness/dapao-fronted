/**
 * 用户类别
 */
export type UserType = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl?: string;
    profile?: string,
    gender: number;
    phone: string;
    email: string;
    planetCode: string;
    tags: string[];
    createTime: Date;
};