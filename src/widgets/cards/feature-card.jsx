import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography
} from "@material-tailwind/react";
import { Grid } from "@mui/material";

export function FeatureCard({ title, description,image }) {
  return (
    <Card className="rounded-lg shadow-lg shadow-gray-500/10">
      <CardBody className="px-8 text-center">
        <img src={image} width="400px"/>

        <Typography variant="h5" className="mb-2 pt-4 pb-1" color="blue-gray">
          {title}
        </Typography>

        <Typography className="font-normal text-blue-gray-600">
          {description}
        </Typography>

      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
