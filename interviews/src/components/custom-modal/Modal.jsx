


export default function Modal({id, header, body,footer, onClose}) {
//these props are optional, used to showcase you know how to make the component reusable
    return <div id={id || 'Modal'} className="modal">
            <div className="modal-content">
                <div className="header">
                    <span onClick={onClose} className="close-modal-icon">&times;</span>
                    <h2>{header? header : 'Header'}</h2>
                </div>
                <div className="body">
                    {body? (body) : 
                        (<div>
                            <p>Modal Body</p>
                        </div>)}
                
                </div>
                <div className="footer">{footer? footer : <h2>Footer</h2>}</div>
            </div>
    </div>
}