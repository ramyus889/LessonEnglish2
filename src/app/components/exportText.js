import blurImage from "../../../public/Screenshot_4.png";
import blurImage2 from "../../../public/Screenshot_3.png";
import blurImage3 from "../../../public/Screenshot_3.png";
export const BigCardData = [
  {
    id: 1,
    image: blurImage,
    dataImage: blurImage,
    dataImage2: blurImage2,
    dataImage3: blurImage3,
    title: "Build",
    cardTitle1: "Easy developer experience",
    cardTitle2: "Language of choice",
    cardTitle3: "Engineering best practices built-in",
    text: "Have you met anyone who said they loved developing in Airflow? That’s why we designed an easy developer experience that you’ll enjoy.",
    cardText1:
      "Start developing locally with a single command or launch a dev environment in your cloud using Terraform.",
    cardText2:
      "Write code in Python, SQL, or R in the same data pipeline for ultimate flexibility.",
    cardText3:
      "Each step in your pipeline is a standalone file containing modular code that’s reusable and testable with data validations. No more DAGs with spaghetti code.",
  },
  {
    id: 2,
    image: blurImage2,
    dataImage: blurImage,
    dataImage2: blurImage2,
    dataImage3: blurImage3,
    title: "Preview",
    cardTitle1: "Interactive code",
    cardTitle2: "Data is a first-class citizen",
    cardTitle3: "Collaborate on cloud",
    text: "Are you wasting time trying to test your DAGs in production? Get instant feedback every time you run code in development.",
    cardText1:
      "Immediately see results from your code’s output with an interactive notebook UI.",
    cardText2:
      "Each block of code in your pipeline produces data that can be versioned, partitioned, and catalogued for future use.",
    cardText3:
      "Develop collaboratively on cloud resources, version control with Git, and test pipelines without waiting for an available sharedstaging environment.",
  },
  {
    id: 3,
    image: blurImage3,
    dataImage: blurImage,
    dataImage2: blurImage2,
    dataImage3: blurImage3,
    title: "Launch",
    cardTitle1: "Fast deploy",
    cardTitle2: "Scaling made simple",
    cardTitle3: "Fully-featured observability",
    text: "Don’t have a large team dedicated to Airflow? Mage makes it easy for a single developer to scale up and manage thousands of pipelines.",
    cardText1:
      "Deploy Mage to AWS, GCP, Azure, or DigitalOcean with only 2 commands using maintained Terraform templates.",
    cardText2:
      "Transform very large datasets directly in your data warehouse or through a native integration with Spark.",
    cardText3:
      "Operationalize your pipelines with built-in monitoring, alerting, and observability through an intuitive UI.",
  },
];
