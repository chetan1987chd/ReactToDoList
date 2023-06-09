import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

type TodoItem = {
  id: number;
  text: string;
  isDone: boolean;
};

export function ToDoList() {
  const [itemList, setItemList] = useState<TodoItem[]>([]);
  const [item, setCurrentItem] = useState<TodoItem>({
    id: 0,
    text: "",
    isDone: false,
  });

  function addItem() {
    setItemList((currentItemList) => {
      return [...currentItemList, item];
    });
    emptyItem();
  }

  function emptyItem() {
    setCurrentItem((item) => {
      return {
        id: 0,
        text: "",
        isDone: false,
      };
    });
  }

  function deleteItem(id: number) {
    setItemList((currentItemList) => {
      return currentItemList.filter((x) => x.id !== id);
    });
  }

  function handleChange(e: any) {
    e.persist(); //persist the event
    setCurrentItem((currentItem) => {
      return { ...currentItem, id: +itemList.length + 1, text: e.target.value };
    });
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Todo List</Card.Title>
          <Container>
            <Row>
              <Col xs={8}>
                <input
                  type="text"
                  id="itemInput"
                  value={item.text}
                  onChange={handleChange}
                ></input>
              </Col>
              <Col>
                <Button onClick={() => addItem()}>Save</Button>
              </Col>
            </Row>
          </Container>
          {itemList.length === 0 && "No items"}
          {itemList.length > 0 && (
            <Container>
              {itemList.map((x) => (
                <Row key={x.id}>
                  <Col>{x.text}</Col>
                  <Col xs={2}>
                    <Button>Complete</Button>
                  </Col>
                  <Col xs={2}>
                    <Button onClick={() => deleteItem(x.id)}>Delete</Button>
                  </Col>
                </Row>
              ))}
            </Container>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
