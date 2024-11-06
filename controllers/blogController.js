// controllers/blogController.js
exports.createBlog = async (req, res) => {
    res.status(201).json({ message: 'Blog created successfully' });
};

exports.readBlog = async (req, res) => {
    res.status(200).json({ message: 'Blog read successfully' });
};

exports.updateBlog = async (req, res) => {
    res.status(200).json({ message: 'Blog updated successfully' });
};

exports.deleteBlog = async (req, res) => {
    res.status(200).json({ message: 'Blog deleted successfully' });
};
