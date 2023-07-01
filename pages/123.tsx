import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Contact() {
  const router = useRouter();
  const { name } = router.query;
  const [formName, setFormName] = useState(name || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 在這裡處理表單提交
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={formName} onChange={(event) => setFormName(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.query;

  return {
    props: {
      name,
    },
  };
}
