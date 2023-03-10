import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
    const [name, setName] = useState(props.name);
    const [role, setRole] = useState(props.role);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Update</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => {
                        handleClose();
                        e.preventDefault();
                        props.updateEmployee(props.id, name, role);
                    }}
                        id='editmodal' className="w-full max-w-sm">
                        <div className="flex md:flex-col flex-col md:items-center mb-6">

                            <div className="flex gap-3 pb-4">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                                    Name
                                </label>
                                <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name" type="text" value={name} onChange={(e) => {
                                        setName(e.target.value)
                                    }} />
                            </div>

                            <div className="flex gap-4">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
                                    Role
                                </label>
                                <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="role" type="text" value={role} onChange={(e) => {
                                        setRole(e.target.value)
                                    }} />
                            </div>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className='bg-slate-400 hover:bg-slate-600 text-white font-bold px-4 py-2 rounded-lg' onClick={handleClose}>Close</button>
                    <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold px-4 py-2 rounded-lg' form='editmodal'>Update</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditEmployee;