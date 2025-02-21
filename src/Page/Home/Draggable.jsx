
import {useDraggable} from '@dnd-kit/react';

const Draggable = ({id}) => {
    const {ref} = useDraggable({
        id,
      });
    return (
        <button ref={ref}>
        Draggable
      </button>
    );
};

export default Draggable;