import mysql from "mysql2/promise";

const connection = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export async function GET() {
  try {
    const [rows] = await connection.execute("SELECT * FROM products");
    return Response.json(rows);
  } catch (error) {
    return Response.json(
      { error: "Verilənlər bazası xətası" },
      { status: 500 }
    );
  }
}

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const {
//       Category,
//       Name,
//       ShortDescription,
//       LongDescription,
//       FrontPhoto,
//       BackPhoto,
//       IssuingCountry,
//       Composition,
//       Quality,
//       Denomination,
//       Year,
//       Weight,
//       Price,
//     } = body;

//     const query = `INSERT INTO coins (Category, Name, ShortDescription, LongDescription, FrontPhoto, BackPhoto, IssuingCountry, Composition, Quality, Denomination, Year, Weight, Price, ViewStatistics) 
//                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, '0');`;

//     const [result] = await connection.execute(query, [
//       Category,
//       Name,
//       ShortDescription,
//       LongDescription,
//       FrontPhoto,
//       BackPhoto,
//       IssuingCountry,
//       Composition,
//       Quality,
//       Denomination,
//       Year,
//       Weight,
//       Price,
//     ]);

//     return Response.json(
//       {
//         message: "Yeni qəpik əlavə olundu!",
//         coin: {
//           id: result.insertId,
//           Category,
//           Name,
//           ShortDescription,
//           LongDescription,
//           FrontPhoto,
//           BackPhoto,
//           IssuingCountry,
//           Composition,
//           Quality,
//           Denomination,
//           Year,
//           Weight,
//           Price,
//         },
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     return Response.json(
//       { error: "Verilənlər bazası xətası" },
//       { status: 500 }
//     );
//   }
// }
