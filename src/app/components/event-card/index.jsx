"use client";

import { useState } from "react";

import Avatar from "@/app/components/avatar";
import Modal from "@/app/components/modal";
import { EditIcon, DeleteIcon } from "@/app/components/icons";
import "./styles.scss";
import { getLocalStorage } from "@/app/utils";

const EventCard = ({ event, deleteEvent, editEvent }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const userInfo = getLocalStorage("userInfo");

  const initialEditFormState = {
    name: event.name,
    description: event.description,
    tag: event.tag,
  };

  return (
    <>
      <div
        className="event-details"
        style={{ borderLeft: `10px solid ${event.eventColor}` }}
      >
        <p className="title">{event.name}</p>
        <p className="description">{event.description}</p>
        <div className="user-info">
          <Avatar initial={userInfo.name.charAt(0)} />
          <div className="name-creation">
            <p className="name">{userInfo.name}</p>
            <p className="created-at">{event.createdDate}</p>
          </div>
          <div className="actions">
            <button
              className="edit-btn"
              title="Edit event"
              onClick={() => setShowEditModal(true)}
            >
              <EditIcon className="edit-icon" />
            </button>
            <button
              className="delete-btn"
              onClick={() => deleteEvent(event.createdDate)}
              title="Delete event"
            >
              <DeleteIcon className="delete-icon" />
            </button>
          </div>
        </div>
      </div>
      {showEditModal ? (
        <Modal
          editForm={true}
          setShowModal={setShowEditModal}
          editEvent={editEvent}
          readableDate={event.createdDate}
          initialFormState={initialEditFormState}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default EventCard;
