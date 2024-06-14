function ToDoItem() {
    let ToDoNameList = "Buy Milk"
    let ToDoItemDate = "4/10/2024"

    return <div class="container text-center">
        <div class="row">
            <div class="col-6">{ToDoNameList}</div>
            <div class="col-4">{ToDoItemDate}</div>
            <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
        </div>
    </div>

}
export default ToDoItem;