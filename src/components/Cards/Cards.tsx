import "./_card.scss";
import SupervisorIcon from "../../assets/images/icon-supervisor.svg";
import TeamBuilderIcon from "../../assets/images/icon-team-builder.svg";
import KarmaIcon from "../../assets/images/icon-karma.svg";
import CalculatorIcon from "../../assets/images/icon-calculator.svg";

type CardProps = {
  title: string;
  description: string;
  icon: string;
};

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="icon">
          <img src={icon} alt={`${title} icon`} />
        </div>
      </div>
    </div>
  );
};

const cardsData = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    icon: SupervisorIcon,
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    icon: TeamBuilderIcon,
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    icon: KarmaIcon,
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    icon: CalculatorIcon,
  },
];
  
const Cards = () => {
  return (
    <section className="card-container">
      {cardsData.map((card, index) => (
         <Card
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </section>
  );
};

export default Cards;
