import { useState } from "react"
import Modal from 'react-modal'
import '../Modalka/Modalka.css'

export default function Modalka() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function showModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }
    return (
        <>
            <button onClick={showModal}>Добавить</button>
            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                <div className="opop">
                    <h2>Оставить заявку на товар</h2> 
                    <label>Введите имя</label>
                    <input type="text" name="title"  />
                    <label>Введите номер телефона</label>
                  
                    <input type="text" name="title" />
                    <label>введите адрес доставки</label>
                    <input type="text" name="title" />
            


                    <button onClick={closeModal}>Закрыть</button>

                </div>
            </Modal>
        </>
    )
}