import React from "react";
import { useNavigate } from "react-router-dom";
import { Course } from "../types/Course";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

const StyledCard = styled(Card)({
  width: 300, // Fixed width
  margin: "16px", // Margin for spacing between cards
  border: "1px solid #ccc", // Border style
  borderRadius: "8px", // Rounded corners
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for a subtle effect
});

const CourseCard: React.FC<Course> = ({ id, title, description, price }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/course/${id}`); // Navigates to the detailed offer page
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" component="div">
          Price: ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          Details
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default CourseCard;
