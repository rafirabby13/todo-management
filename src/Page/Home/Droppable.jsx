import { useDroppable } from '@dnd-kit/react';
import React from 'react';

const Droppable = ({id, children}) => {
    const {ref, isDropTarget} = useDroppable({id});
    // console.log('id..' ,id)
   

    return (
      <div>
          <div ref={ref} style={{
            display: 'flex',
            alignItems: 'start',
            // justifyContent: 'center',
            width: 300,
            height: 300,
            backgroundColor: isDropTarget ? '#1eb99d25' : '#ffffff',
            border: '3px solid',
            borderColor: isDropTarget ? '#1eb99d' : '#00000020',
            borderRadius: 10,
          }}>
            {children}
          </div>
          <p>jhsdgfjsdh: {id}</p>
      </div>
    );
};

export default Droppable;