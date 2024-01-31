import { Request, Response } from 'express';
import { db } from '../database';
import { Post } from '../models/postModel';

export const getAllPosts = (req: Request, res: Response) => {
  const sql = 'SELECT * FROM post';
  const params: any[] = [];
  db.all(sql, params, (err: Error | null, rows: Post[]) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows,
    });
  });
};

export const getPostById = (req: Request, res: Response) => {
  const sql = 'SELECT * FROM post WHERE id = ?';
  const params = [req.params.id];
  db.get(sql, params, (err: Error | null, rows: Post[]) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows,
    });
  });
};

export const createPost = (req: Request, res: Response) => {
  const { title, content } = req.body as Post;
  const sql = 'INSERT INTO post (title, content) VALUES (?, ?)';
  const params = [title, content];
  db.run(sql, params, function (this: any, err: Error | null) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: { id: this.lastID, title, content },
    });
  });
};

export const updatePost = (req: Request, res: Response) => {
  const { title, content } = req.body as Post;
  const sql = 'UPDATE post SET title = ?, content = ? WHERE id = ?';
  const params = [title, content, req.params.id];
  db.run(sql, params, function (err: Error | null) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: { id: req.params.id, title, content },
    });
  });
};

export const deletePost = (req: Request, res: Response) => {
  const sql = 'DELETE FROM post WHERE id = ?';
  const params = [req.params.id];
  db.run(sql, params, function (this: any, err: Error | null) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: 'deleted', changes: this.changes });
  });
};
