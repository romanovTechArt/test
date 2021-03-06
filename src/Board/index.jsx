import React, {useState, useCallback, useRef} from "react";
import {DndProvider, useDrag, useDrop} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import update from "immutability-helper";
import './board.css'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

const tasksList = [
    {_id: 1, title: "First Task", status: "plan", color: "urgent", text: "Additional Information"},
    {_id: 2, title: "Second Task", status: "plan", color: "bug-fix", text: "Additional Information"},
    {_id: 3, title: "Third Task", status: "plan", color: "urgent", text: "Additional Information"},
    {_id: 4, title: "Fourth Task", status: "toDo", color: "features", text: "Additional Information"},
    {_id: 5, title: "Fifth Task", status: "toDo", color: "urgent", text: "Additional Information"},
    {_id: 6, title: "Sixth Task", status: "code", color: "bug-fix", text: "Additional Information"},
    {_id: 7, title: "Seventh Task", status: "test", color: "urgent", text: "Additional Information"},
    {_id: 8, title: "Eighth Task", status: "create", color: "features", text: "Additional Information"},
];

const labelsMap = {
    toDo: "To Do",
    plan: "Plan",
    code: "Code",
    create: "Create",
    test: "Test",
    done: "Done"
};

const Board = () => {
    const [tasks, setTaskStatus] = useState(tasksList);
    const [currentItem, setCurrentItem] = useState(null)
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = (item) => {
        setOpen(true);
        setCurrentItem(item)
    };

    const handleClose = () => {
        setOpen(false);
    };


    const changeTaskStatus = useCallback(
        (id, status) => {
            let task = tasks.find(task => task._id === id);
            const taskIndex = tasks.indexOf(task);
            task = {...task, status};
            let newTasks = update(tasks, {
                [taskIndex]: {$set: task}
            });
            setTaskStatus(newTasks);
        },
        [tasks]
    );

    return (
        <main>
            <DndProvider backend={HTML5Backend}>
                <section className={"board"}>
                    <KanbanColumn
                        key={"toDo"}
                        status={"toDo"}
                        changeTaskStatus={changeTaskStatus}
                    >
                        <div className={"board__column"}>
                            <div className={"board__column__columnHead_toDo"}>{labelsMap["toDo"]}</div>
                            <div className={"board__column__content"}>
                                {tasks
                                    .filter(item => item.status === "toDo")
                                    .map(item => (
                                        <KanbanItem key={item._id} id={item._id}>
                                            <div onClick={() => handleClickOpen(item.title)}
                                                 className={`board__column__columnHead__item board__column__columnHead__item_${item.color}`}>{item.title}</div>
                                        </KanbanItem>
                                    ))}
                            </div>
                        </div>
                    </KanbanColumn>
                    <div className={"board__column_progress"}>
                        <div className={"board__column_progress_progress"}>In progress</div>
                        <div className={"board__column_progress_list"}>
                            <KanbanColumn
                                key={"plan"}
                                status={"plan"}
                                changeTaskStatus={changeTaskStatus}
                            >
                                <div className={"board__column"}>
                                    <div className={"board__column__columnHead_plan"}>{labelsMap["plan"]}</div>
                                    <div className={"board__column__content"}>
                                        {tasks
                                            .filter(item => item.status === "plan")
                                            .map(item => (
                                                <KanbanItem key={item._id} id={item._id}>
                                                    <div onClick={() => handleClickOpen(item.title)}
                                                        className={`board__column__columnHead__item board__column__columnHead__item_${item.color}`}>{item.title}</div>
                                                </KanbanItem>
                                            ))}
                                    </div>
                                </div>
                            </KanbanColumn>
                            <KanbanColumn
                                key={"code"}
                                status={"code"}
                                changeTaskStatus={changeTaskStatus}
                            >
                                <div className={"board__column"}>
                                    <div className={"board__column__columnHead_code"}>{labelsMap["code"]}</div>
                                    <div className={"board__column__content"}>
                                        {tasks
                                            .filter(item => item.status === "code")
                                            .map(item => (
                                                <KanbanItem key={item._id} id={item._id}>
                                                    <div onClick={() => handleClickOpen(item.title)}
                                                        className={`board__column__columnHead__item board__column__columnHead__item_${item.color}`}>{item.title}</div>
                                                </KanbanItem>
                                            ))}
                                    </div>
                                </div>
                            </KanbanColumn>
                            <KanbanColumn
                                key={"create"}
                                status={"create"}
                                changeTaskStatus={changeTaskStatus}
                            >
                                <div className={"board__column"}>
                                    <div className={"board__column__columnHead_create"}>{labelsMap["create"]}</div>
                                    <div className={"board__column__content"}>
                                        {tasks
                                            .filter(item => item.status === "create")
                                            .map(item => (
                                                <KanbanItem key={item._id} id={item._id}>
                                                    <div onClick={() => handleClickOpen(item.title)}
                                                        className={`board__column__columnHead__item board__column__columnHead__item_${item.color}`}>{item.title}</div>
                                                </KanbanItem>
                                            ))}
                                    </div>
                                </div>
                            </KanbanColumn>
                            <KanbanColumn
                                key={"test"}
                                status={"test"}
                                changeTaskStatus={changeTaskStatus}
                            >
                                <div className={"board__column"}>
                                    <div className={"board__column__columnHead_test"}>{labelsMap["test"]}</div>
                                    <div className={"board__column__content"}>
                                        {tasks
                                            .filter(item => item.status === "test")
                                            .map(item => (
                                                <KanbanItem key={item._id} id={item._id}>
                                                    <div onClick={() => handleClickOpen(item.title)}
                                                        className={`board__column__columnHead__item board__column__columnHead__item_${item.color}`}>{item.title}</div>
                                                </KanbanItem>
                                            ))}
                                    </div>
                                </div>
                            </KanbanColumn>
                        </div>
                    </div>
                    <KanbanColumn
                        key={"done"}
                        status={"done"}
                        changeTaskStatus={changeTaskStatus}
                    >
                        <div className={"board__column"}>
                            <div className={"board__column__columnHead_done"}>{labelsMap["done"]}</div>
                            <div className={"board__column__content"}>
                                {tasks
                                    .filter(item => item.status === "done")
                                    .map(item => (
                                        <KanbanItem key={item._id} id={item._id}>
                                            <div onClick={() => handleClickOpen(item.title)}
                                                className={`board__column__columnHead__item board__column__columnHead__item_${item.color}`}>{item.title}</div>
                                        </KanbanItem>
                                    ))}
                            </div>
                        </div>
                    </KanbanColumn>
                </section>
            </DndProvider>
            {open && (
                <div>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogContent>
                            <DialogContentText>
                                Additional information for {currentItem}
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </div>
            )}
        </main>
    );
};

export default Board;

const KanbanColumn = ({status, changeTaskStatus, children}) => {
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: "card",
        drop(item) {
            changeTaskStatus(item.id, status);
        }
    });
    drop(ref);
    return <div ref={ref}> {children}</div>;
};

const KanbanItem = ({id, children}) => {
    const ref = useRef(null);
    const [{isDragging}, drag] = useDrag({
        item: {type: "card", id},
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    const opacity = isDragging ? 0 : 1;
    drag(ref);
    return (
        <div ref={ref} style={{opacity}}>
            {children}
        </div>
    );
};