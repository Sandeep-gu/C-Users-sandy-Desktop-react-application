
import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContexts';
import Noteitem from './Noteitem';
import AddNotes from './AddNotes';


const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes()
    }, [])

const ref = useRef(null);
const updateNote=(note)=>{
    ref.current.click();
}


    return (
        <>
            <AddNotes />
            <button ref = {ref} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                Launch demo modal
            </button>


            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container mx-5 row my-3">
                <h3 className='my-3'>Your Notes</h3>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote = {updateNote} note={note} />;
                })}

            </div>
        </>
    )
}

export default Notes
