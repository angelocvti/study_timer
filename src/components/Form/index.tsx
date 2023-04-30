import { Component } from "react";
import Button from "../Button";

class Form extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="task">Add study</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What you want to learn"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="time'">Time</label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          ></input>
        </div>
        <Button></Button>
      </form>
    );
  }
}

export default Form;
