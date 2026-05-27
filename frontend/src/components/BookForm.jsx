import { useEffect, useState } from "react";

function BookForm({
    API_URL,
    loadBooks,
    editingBook,
    setEditingBook
}) {
    const [formData, setFormData] = useState({
        isbn: "",
        title: "",
        author: "",
        publishedDate: "",
        pages: "",
    });

    useEffect(() => {
        if (editingBook) {
            setFormData(editingBook);
        }
    }, [editingBook]);

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (editingBook) {
            await fetch(`${API_URL}/${editingBook._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            setEditingBook(null);
        } else {
            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
        }

        setFormData({
               isbn: "",
                title: "",
                author: "",
                publishedDate: "",
                pages: "",
        });

        loadBooks();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
            />
            <input
                type="text"
                name="isbn"
                placeholder="ISBN"
                value={formData.isbn}
                onChange={handleChange}
            />
            <input
                type="date"
                name="publishedDate"
                placeholder="Published Date"
                value={formData.publishedDate}
                onChange={handleChange}
            />
            <input
                type="number"
                name="pages"
                placeholder="Number of Pages"
                value={formData.pages}
                onChange={handleChange}
            />
            <button type="submit">
                {editingBook ? "Update Book" : "Add Book"}
            </button>
        </form>
    );
}

export default BookForm;