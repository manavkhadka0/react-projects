import './Sidebar.css'

import React, { useState, useEffect } from 'react';
import {Avatar,IconButton} from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';
import db from './firebase';
import { useStateValue } from './StateProvider';


function Sidebar() {

     const [rooms,setRooms] = useState([]);
     const [{user},dispatch] = useStateValue();

     useEffect(() => {
          const unsubscribe= db.collection('rooms').onSnapshot((snapshot) => 
                   setRooms(snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                   }))) 
               );
          return () => {
               unsubscribe();
          }
     },[]);
     return (
          <div className="sidebar">      
               <div className="sidebar__header">
                    <Avatar src={user?.photoURL}/>
                    <div className="sidebar__headerRight">
                         <IconButton>
                              <DonutLargeIcon/>               
                         </IconButton>
                         <IconButton>
                              <MessageIcon/>
                         </IconButton>                            
                         <IconButton>     
                              <DragIndicatorIcon/>
                         </IconButton>                  
                    </div>                   
               </div>
               <div className="sidebar__search">
                    <div className= "sidebar__searchContainer">                  
                         <IconButton>
                              <SearchIcon/>
                         </IconButton>
                         <input placeholder="Search or start new chat" type="text"/>
                    </div>
               </div>
               <div className="sidebar__chats">
                    <SidebarChat addNewChat/>
                    {rooms.map(room => (
                         <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                    ))}

               </div>
          </div>
     );
}

export default Sidebar;