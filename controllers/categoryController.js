import db from "../config/db.js";

////// nambahin
export const createCategory = (req, res) => {
  const { name } = req.body;
  db.query(
    "INSERT INTO categories (name) VALUES (?)",
    [name],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Category created" });
    }
  );
};

////// lihat data
export const getCategories = (req, res) => {
  db.query("SELECT * FROM categories", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

////// lihat detail
export const getCategoryById = (req, res) => {
  db.query(
    "SELECT * FROM categories WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result[0]);
    }
  );
};

// apdet
export const updateCategory = (req, res) => {
  db.query(
    "UPDATE categories SET name=? WHERE id=?",
    [req.body.name, req.params.id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Category updated" });
    }
  );
};

////// apus
export const deleteCategory = (req, res) => {
  db.query(
    "DELETE FROM categories WHERE id=?",
    [req.params.id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Category deleted" });
    }
  );
};
