import { Router } from 'next/router';
import React, { useState, FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';
//import {useRouter} from 'next/navigation';


//const router = useRouter();


function SearchBar(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    //router.push(`/?location=${searchTerm}`);
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button type="submit" style={{ backgroundColor: "red" }}> {/* Set background color to red */}
  Submit
</Button>
    </Form>
  );
}

export default SearchBar;
