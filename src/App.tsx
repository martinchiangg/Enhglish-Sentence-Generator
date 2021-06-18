import React, { useState, ChangeEvent } from "react";
import { Message } from "./components/Message";
import { InputGroup } from "./components/InputGroup";
import { Input } from "./components/Input";
import { Label } from "./components/Label";
import { SentenceType, VerbTense } from "./type";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [result, setResult] = useState<null | string>(null);
  const [sentenceType, setSentenceType] = useState<SentenceType>(
    SentenceType.YES_NO
  );
  const [subject, setSubject] = useState("");
  const [verb, setVerb] = useState("");
  const [object, setObject] = useState("");
  const [verbTense, setVerbTense] = useState<VerbTense>(VerbTense.PRESENT);

  const handleSubmit = async () => {
    console.log(sentenceType, subject, verb, object, verbTense);
    if (subject === "" || verb === "" || object === "") {
      alert("All input fields should have values");
      setHasError(true);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://lt-nlgservice.herokuapp.com/rest/english/realise?subject=${subject}&verb=${verb}&object=${object}&tense=${verbTense}&sentencetype=${sentenceType}`
      );
      const data = await response.json();
      if (data.result === "OK") setResult(data.sentence);
      if (data.result === "error") setHasError(true);
    } catch (e) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="main-container">
      <h1>Generate English Sentence</h1>
      <div className="selection-container">
        <div className="select-dropdown-div">
          <label htmlFor="sentenceType">Choose a sentence type:</label>
          <select
            id="sentenceType"
            name="Sentence Type"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setSentenceType(e.target.value as SentenceType)
            }
            value={sentenceType}
          >
            <option value={SentenceType.YES_NO}>yesno</option>
            <option value={SentenceType.WHAT_OBJECT}>whatobj</option>
            <option value={SentenceType.WHO_SUBJECT}>whosubj</option>
          </select>
        </div>
        <InputGroup>
          <Label>Subject (Noun)</Label>
          <Input
            name="subject"
            placeholder="Amy"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSubject(e.target.value)
            }
            onFocus={() => setHasError(false)}
            hasError={hasError}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>Verb</Label>
          <Input
            name="verb"
            placeholder="eat"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setVerb(e.target.value)
            }
            onFocus={() => setHasError(false)}
            hasError={hasError}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>Object (Noun)</Label>
          <Input
            name="object"
            placeholder="apple"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setObject(e.target.value)
            }
            onFocus={() => setHasError(false)}
            hasError={hasError}
            required
          />
        </InputGroup>
        <div className="select-dropdown-div">
          <label htmlFor="verbTense">Choose a verb tense:</label>
          <select
            id="verbTense"
            name="Verb Tense"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setVerbTense(e.target.value as VerbTense)
            }
            value={verbTense}
          >
            <option value={VerbTense.PRESENT}>present</option>
            <option value={VerbTense.PAST}>past</option>
            <option value={VerbTense.FUTURE}>future</option>
          </select>
        </div>
        <button className="generate-button" onClick={handleSubmit}>
          Generate
        </button>
      </div>
      {loading && <Message text="Loading sentence results..." />}
      {!loading && !hasError && !result && (
        <Message text="Select or enter your variables, and click Generate button!" />
      )}
      {!loading && hasError && (
        <Message text="Oops, we are having issues generating a sentence for you" />
      )}
      {!loading && result && <Message text={result} />}
    </section>
  );
};

export default App;
