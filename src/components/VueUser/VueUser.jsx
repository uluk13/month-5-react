import React from 'react'
import './style.css'
import img from '../../assets/image.png'

function VueUser() {

    const list_users = [
    {
        id: 1,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    },
     {
        id: 2,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    },
    {
        id: 3,
        url: img,
        price: '400',
        address: "ibraimova",
        room: 2,
        floor: 3
    },
     {
        id: 4,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    }, {
        id: 5,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    }, {
        id: 6,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    }, {
        id: 7,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    }, {
        id: 8,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    }, {
        id: 9,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    }, {
        id: 10,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    },
     {
        id: 11,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    },
     {
        id: 12,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    },
    {
        id: 13,
        url: img,
        price: '400',
        address: "ibraimova",
        room: 2,
        floor: 3
    },
     {
        id: 14,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    }, {
        id: 15,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    }, {
        id: 16,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    }, {
        id: 17,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    }, {
        id: 18,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    }, {
        id: 19,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    }, {
        id: 20,
        url: img,
        price: '200',
        address: "ibraimova",
        room: 3,
        floor: 5
    },
]

  return (
    <div className="main_block">
      {list_users.map((user, index) => (
        <div
          className="user_card"
          key={user.id}
          onClick={() => console.log(user)}
        >
          {index < 10 && <span className="premium">Премиум</span>}

          <img src={user.url} alt="" />
          <p className="price">price: {user.price}</p>
          <p className="address">address: {user.address}</p>
          <p className="room">room: {user.room}</p>
          <p className="floor">floor: {user.floor}</p>
        </div>
      ))}
    </div>
  )
}




export default VueUser