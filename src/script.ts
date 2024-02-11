// 1
import { PrismaClient } from "@prisma/client";

// 2
const prisma = new PrismaClient();

// 3
async function main() {
  const newLink = await prisma.link.create({
    data: {
        description: 'new lnk desc',
        url: 'www.site.com'
    }
  })  
  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
}

// 4
main()
  // 5
  .finally(async () => {
    await prisma.$disconnect();
  });
