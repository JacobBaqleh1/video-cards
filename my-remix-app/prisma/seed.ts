import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const user = [
  {
    id: 1,
    email: 50,
    password: 'USD',
    posts: Post[],
  }];

  const post = [
  {
    id: 1,
    cardName: 2500,
    cardSideOne: 'USD',
    cardSideTwo: '2022-12-30',
  }];

  function createExpense(expenseData: (typeof user)[number]) {
    return db.expense.create({
      data: {
        id: expenseData.id,
        email: expenseData.email,
        password: expenseData.password,
        
      },
    });
  }

  function createInvoice(incomeData: (typeof post)[number]) {
    return db.invoice.create({
      data: {
        id: incomeData.id,
        cardName: incomeData.cardName,
        cardSideOne: incomeData.cardSideOne,
        cardSideTwo: incomeData.cardSideTwo,
        
      },
    });
  }

  console.log("🌱 Seeding the database...");
  const start = performance.now();
  const expensePromises = user.map((expense) => createExpense(expense));
  const invoicePromises = post.map((post) => createInvoice(post));
  await Promise.all([...expensePromises, ...invoicePromises]);
  const end = performance.now();
  console.log(`🚀 Seeded the database. Done in ${Math.round(end - start)}ms`);