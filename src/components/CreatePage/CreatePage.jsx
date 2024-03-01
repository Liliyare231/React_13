import '../CreatePage/CreatePage.css'
import { useEffect, useState } from "react"



export default function CreatePage() {
    const [message, setMessage] = useState()

    function createForm(event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData
        })

        event.target.reset()
        setMessage('Форма отправлена')
    }
    return (
        <div className='form_block'>
            <h1>Добавление</h1>
            <form onSubmit={createForm}>
                <label>Введите название</label>
                <input type="text" name="title" />
                <label>Введите описание</label>
                <textarea name="body"></textarea>
                <button type="submit">Добавить</button>
                {message}
            </form>
        </div>
    )
}