import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false,
		contactToDelete: null
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((item, index) => {
							return (
								<ContactCard
									onDelete={() => setState({ showModal: true, contactToDelete: item.id })}
									key={index}
									contact={item}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.contactToDelete} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
