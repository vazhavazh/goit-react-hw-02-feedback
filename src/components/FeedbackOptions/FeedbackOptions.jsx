import PropTypes from "prop-types"
import { Button } from "./FeedbackOptionsStyled";


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <Button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </Button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};