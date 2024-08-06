import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function NewContact() {
    const { store, actions } = useContext(Context)
    return (
        <>
            <form onSubmit={actions.addContact}>
                <h1 className="text-center">Agregar nuevo contacto</h1>
                <div className="newContact-container container-fluid w-75">
                    {/* name */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre completo</label>
                        <input type="text" className="form-control" id="name" placeholder="Nombre completo"
                            value={store.inputs.name || ""}
                            onChange={event => actions.getInput(event)}
                            required />
                    </div>
                    {/* phone */}
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Teléfono de contacto</label>
                        <input type="text" className="form-control" id="phone" placeholder="Teléfono de contacto"
                            value={store.inputs.phone || ""}
                            onChange={event => actions.getInput(event)}
                            required />
                    </div>
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Email"
                            value={store.inputs.email || ""}
                            onChange={event => actions.getInput(event)}
                            required />
                    </div>
                    {/* address */}
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="address" placeholder="Dirección"
                            value={store.inputs.address || ""}
                            onChange={event => actions.getInput(event)}
                            required />
                    </div>
                    {/* actions - save & cancel */}
                    {Object.keys(store.inputs).length === 4
                        ? <button type="submit" className="col-6 my-2 btn btn-success"
                            data-bs-toggle="modal" data-bs-target="#addModal">
                            Guardar
                        </button>
                        : null}
                    <Link to="/" className="col-6 my-2 btn btn-secondary"
                        onClick={actions.resetInput}>
                        Cancelar
                    </Link>
                </div>
                {/* Modal - added confirmation */}
                <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="confirmAdd" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="confirmAdd">Nuevo Contacto</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Nuevo Contacto agregado correctamente</p>
                            </div>
                            <div className="modal-footer">
                                <Link to="/">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                                        Volver a la Lista de Contactos
                                    </button>
                                </Link>
                                <button className="btn btn-secondary" data-bs-dismiss="modal"
                                    onClick={actions.resetInput}>
                                    Agregar otro contacto.
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default NewContact;