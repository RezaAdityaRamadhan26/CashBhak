"use server";

import connection from "./db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function register(formData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password1 = formData.get("password1");
  const password2 = formData.get("password2");

  if (password1 !== password2) {
    console.log("register gagal: password tidak sama");
    return;
  }

  await connection.execute(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password1]
  );

  redirect("/login");
}

export async function findUserByEmail(email) {
    const [user] = await connection.execute("select * from users where email = ?",[email])

    if(!user.length) return null

    return user[0]

  }

export async function fetchItems() {
    const [items] = await connection.query(`
        SELECT * FROM PRODUCTS;
    `);

    return items;
}



export async function pushProduct(formData) {
  const userId = 1; // sekarang pasti ada id

  const product_name = formData.get("product_name");
  const price = formData.get("price");
  const stock = formData.get("stock");
  const product_image = formData.get("product_image");

  await connection.execute(
    `INSERT INTO products (user_id, product_name, price, stock, product_image)
     VALUES (?, ?, ?, ?, ?)`,
    [userId, product_name, price, stock || 0, product_image]
  );

  revalidatePath("/items");
}

export async function deleteData(formData) {
  const id = formData.get("id");

  await connection.execute(`DELETE FROM products WHERE product_id = ?`, [id]);

  revalidatePath("/items");
}
export async function updateProduct(formData) {
  const product_id = formData.get("product_id");
  const product_name = formData.get("product_name");
  const price = formData.get("price");
  const stock = formData.get("stock");
  const product_image = formData.get("product_image");

  await connection.execute(
    `UPDATE products 
     SET product_name = ?, price = ?, stock = ?, product_image = ? 
     WHERE product_id = ?`,
    [product_name, price, stock, product_image, product_id]
  );

  revalidatePath("/items");
}

