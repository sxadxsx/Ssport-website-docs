import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Contact() {
  const router = useRouter();
  const [name, setName] = useState('');

  useEffect(() => {
    // 获取URL参数（例如：/contact?name=abc）
    const urlName = router.query.name;

    if (urlName) {
      // 如果存在name参数，将其设置为输入框的值
      setName(urlName);
    }
  }, [router.query]);

  return (
    <form>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* 其他表单元素 */}
    </form>
  );
}
