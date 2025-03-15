import mysql from "mysql2/promise";

const connection = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export async function GET(req, { params }) {
  try {
    const [rows] = await connection.execute(
      "SELECT * FROM products WHERE id = ?",
      [params.id]
    );

    if (rows.length === 0) {
      return Response.json({ error: "Məlumat tapılmadı" }, { status: 404 });
    }

    return Response.json(rows[0]);
  } catch (error) {
    return Response.json(
      { error: "Verilənlər bazası xətası" },
      { status: 500 }
    );
  }
}

// export async function PUT(req, { params }) {
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
//       ViewStatistics,
//     } = body;

//     const query = `UPDATE coins SET Category = ?, Name = ?, ShortDescription = ?, LongDescription = ?, FrontPhoto = ?, BackPhoto = ?, IssuingCountry = ?, Composition = ?, Quality = ?, Denomination = ?, Year = ?, Weight = ?, Price = ?, ViewStatistics = ? WHERE CoinID = ?`;

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
//       ViewStatistics,
//       params.id,
//     ]);

//     if (result.affectedRows === 0) {
//       return Response.json({ error: "Qəpik tapılmadı" }, { status: 404 });
//     }

//     return Response.json({ message: `Qəpik ${params.id} uğurla yeniləndi.` });
//   } catch (error) {
//     return Response.json(
//       { error: "Verilənlər bazası xətası" },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(req, { params }) {
//   try {
//     const [result] = await connection.execute(
//       "DELETE FROM coins WHERE CoinID = ?",
//       [params.id]
//     );

//     if (result.affectedRows === 0) {
//       return Response.json({ error: "Qəpik tapılmadı" }, { status: 404 });
//     }

//     return Response.json({ message: `Qəpik ${params.id} uğurla silindi.` });
//   } catch (error) {
//     return Response.json(
//       { error: "Verilənlər bazası xətası" },
//       { status: 500 }
//     );
//   }
// }
