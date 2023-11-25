import { z } from "zod";

const projectSchema = z.object({
  name: z.string(),
  link: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

export function getProjects(): Project[] {
  return [
    {
      name: "food101-transfer-learning",
      link: "https://www.kaggle.com/code/kuvambhardwaj/food101-dataset-efficientnetv2-b0",
      description:
        "Notebook where I train the EfficientnetV2_B0 to classify food images into 101 classes on the full dataset.",
    },
    {
      name: "nlp-with-disaster-tweets",
      link: "https://www.kaggle.com/code/kuvambhardwaj/nlp-with-disaster-tweets",
      description:
        "Notebook where I experiment with different NLP techniques to classify tweets.",
    },
    {
      name: "rock-paper-scissors",
      link: "https://www.kaggle.com/code/kuvambhardwaj/rock-paper-scissors-classifier-tfds-dataset",
      description:
        "Notebook where I build a CNN to classify rock, paper, scissors images.",
    },
    {
      name: "mnist-fashion",
      link: "https://www.kaggle.com/code/kuvambhardwaj/mnist-fashion-3-models",
      description:
        "Notebook where I build & tinker with 2 different CNN models and 1 ANN model to classify fashion items.",
    },
    {
      name: "digits-with-cnn-and-anns",
      link: "https://www.kaggle.com/code/kuvambhardwaj/digits-with-cnn-and-anns",
      description:
        "Notebook where I experiment with different CNN & ANN architectures to classify digits.",
    },
  ];
}
