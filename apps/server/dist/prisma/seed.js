"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.user.deleteMany();
    await prisma.post.deleteMany();
    console.log('⚙️ Seeding DB..');
    const user1 = await prisma.user.create({
        data: {
            email: 'lisa@simpson.com',
            name: 'Lisa',
            posts: {
                create: {
                    title: 'Join us for Prisma Day 2019 in Berlin',
                    content: 'https://www.prisma.io/day/',
                    published: true,
                },
            },
        },
    });
    const user2 = await prisma.user.create({
        data: {
            email: 'bart@simpson.com',
            name: 'Bart',
            posts: {
                create: [
                    {
                        title: 'Subscribe to GraphQL Weekly for community news',
                        content: 'https://graphqlweekly.com/',
                        published: true,
                    },
                    {
                        title: 'Follow Prisma on Twitter',
                        content: 'https://twitter.com/prisma',
                        published: false,
                    },
                ],
            },
        },
    });
    console.log('✅ DB successfully seeded');
    console.log({ user1, user2 });
}
main()
    .catch((e) => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map