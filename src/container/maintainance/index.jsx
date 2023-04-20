import React, { useMemo, useState } from "react";
import "./maintainance.css";
import Navbar from "../../components/navbar/Navbar";
import MaintainanceCard from "../../components/common/MaintainanceCard";

const Maintainance = (props) => {
  const [selectedIdComment, setSelectedIdComment] = useState({id: "", task: ""});
  const [selectedComment, setSelectedComment] = useState();
  const [searchValue, setSearchValue] = useState("");

  const maintainanceData = useMemo(() => {
    const commentedData = props.data?.rooms.filter((f) => f.maintenance !== null).map((task) => {
      return {
        room_id: Number(task.id),
        task: task?.maintenance
      }
    });
    const seperatedTaskList = commentedData.map((t) => {
      return {
        id: t.room_id,
        task: t?.task.task1
      }
    })
    const seperatedTaskList2 = commentedData.map((t) => {
      return {
        id: t.room_id,
        task: t?.task.task2
      }
    })
    const seperatedTaskList3 = commentedData.map((t) => {
      return {
        id: t.room_id,
        task: t?.task.task3
      }
    })
    const combinedData = [...seperatedTaskList, ...seperatedTaskList2, ...seperatedTaskList3];
    const finalData = combinedData?.filter((f) => f.task !== undefined).sort((t1, t2) => t1.id - t2.id);
    return finalData;
  },[props.data]);
  
  const mainData = useMemo(() => {
    if (searchValue && searchValue !== "" && searchValue.length >= 3) {
      const data = maintainanceData.filter(
        (f) => f.id === Number(searchValue)
      );
      return data;
    }
    return maintainanceData;
  },[searchValue])

  maintainanceData?.map(function(obj) {
    (obj.id === selectedIdComment.id) && (obj.task === selectedIdComment.task) && (obj.task = undefined);
  });

  return (
    <div className="maintainance-container">
      <Navbar
        head1="Maintainance"
        head2="All tasks"
        setIsLogin={props.setIsLogin}
        setSearchValue={setSearchValue}
      />
      <div className="room-cards-container">
        {mainData && mainData.filter((f) => f.task !== undefined).map((task) =>(
          <MaintainanceCard 
            room_no={task.id}
            comment={task.task} 
            backgroundColor="#404040"
            setSelectedIdComment={setSelectedIdComment}
            setSelectedComment={setSelectedComment}
            selectedComment={selectedComment}
            onCardClick={() => setSelectedComment({id: task.id, task: task.task})}
          />
        ))}
      </div>
    </div>
  )
}

export default Maintainance;