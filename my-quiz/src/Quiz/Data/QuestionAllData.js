import { questionsCss } from "./QuestiondataCss";
import { questionsHtml } from "./QuestiondataHtml";
import { javascriptQuestions } from "./QuestiondataJavascript";
import { laravelQuestions } from "./QuestiondataLaravel";
import { mongodbQuestions } from "./QuestiondataMongoDb";
import { nodejsQuestions } from "./QuestiondataNode";
import { phpQuestions } from "./QuestiondataPhp";
import { pythonQuestions } from "./QuestiondataPython";
import {reactQuestions} from './QuestiondataReact'
import { sqlQuestions } from "./QuestiondataSql";

export const questionsData = {
  type: {
    Javascript: [...javascriptQuestions],
    Python: [...pythonQuestions],
    Css: [...questionsCss],
    Html: [...questionsHtml],
    React: [...reactQuestions],
    NodeJs: [...nodejsQuestions],
    Laravel: [...laravelQuestions],
    Sql: [...sqlQuestions],
    Php: [...phpQuestions],
    MongoDb: [...mongodbQuestions],
  }
};
