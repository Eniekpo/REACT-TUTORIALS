import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [img, setImg] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className='block mx-auto m-3 bg-purple-500 hover:bg-purple-700 text-white font-bold px-4 py-2 rounded-lg'>
               + Add Employee
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setName('');
                        setRole('');
                        setImg('');
                        props.newEmployee(name, role, img);
                    }}
                        id='editmodal' className="w-full max-w-sm">
                        <div className="flex md:flex-col flex-col md:items-center mb-6">

                            <div className='flex gap-3 pb-3'>
                                <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-1" for="name">
                                    Name
                                </label>
                                <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name" type="text" value={name} onChange={(e) => {
                                        setName(e.target.value)
                                    }} placeholder='Name'/>
                                </div>
                            
                            <div className='flex gap-4 pb-3'>
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1" for="role">
                                    Role
                                </label>
                                <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="role" type="text" value={role} onChange={(e) => {
                                        setRole(e.target.value)
                                    }} placeholder='Role'/>
                            </div>

                            <div className='flex gap-3'>
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1" for="img">
                                   Image
                                </label>
                                <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="img" type="text" value={img} onChange={(e) => {
                                        setImg(e.target.value)
                                    }} placeholder=' img url'/>
                                </div>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='bg-slate-400 hover:bg-slate-600 text-white font-bold px-4 py-2 rounded-lg' onClick={handleClose}>Close</button>
                    <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold px-4 py-2 rounded-lg' onClick={handleClose} form='editmodal'>Add</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddEmployee;