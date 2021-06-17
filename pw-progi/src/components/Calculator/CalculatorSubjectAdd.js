import { Container, Row, Col, Form } from "react-bootstrap";
import { PlusSquare } from "react-bootstrap-icons";

import styles from "./CalculatorSubjectAdd.module.css";

const CalculatorSubjectAdd = (props) => {
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
};

export default CalculatorSubjectAdd;
