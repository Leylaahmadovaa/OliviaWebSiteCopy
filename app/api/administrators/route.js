// import mysql from "mysql2/promise";

// const connection = await mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

// export async function GET(req) {
//   try {
//     const [rows] = await connection.execute("SELECT * FROM administrators");
//     return Response.json(rows);
//   } catch (error) {
//     return Response.json(
//       { error: "Verilənlər bazası xətası" },
//       { status: 500 }
//     );
//   }
// }
