import Head from 'next/head'
import styles from './components/Button.module.css';
import { Label, Select } from 'flowbite-react';
import { FileInput } from 'flowbite-react';

function c() {
  return (   
        <div>
   <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
      <span className={styles.abc}>聯繫</span>
      我們
    </h2>
    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
      有任何問題，立刻聯繫我們😊
    </p>
    <form
              action="https://submit-form.com/yFAbXMpc"
              name="聯繫表單"
              method="POST"
    className="space-y-8"
            >
      <input
    type="hidden"
    name="_redirect"
    value="https://www.ssangyongsports.org/thanks"
  />
        <input type="hidden" name="form-name" value="聯繫表單" />
       <label
         htmlFor="email"
  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
>
  你的電子郵件

<input
  type="email"
  name="email"
  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
  placeholder="peter@ssangyongsports.org"
  required={true}
/>
      </label>
      <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="幫助範圍"
          value="幫助範圍"
        />
      </div>
      <Select
        name="help"
        required
      >
      <option value="雙龍體育">雙龍體育</option>
    <option value="雙龍職籃">雙龍職籃</option>
    <option value="雙龍職棒">雙龍職棒</option>
    <option value="雙龍體育TV">雙龍體育TV</option>
    <option value="其他">其他</option>
    <option value="系統網站問題回報">系統網站問題回報</option>
      </Select>
    </div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          主旨
        
        <input
          type="text"
          name="subject"
          required={true}
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="讓我們得知如何幫助你"
          />
          </label>
    
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          內容
        
        <textarea
          name="message"
          rows={6}
          required={true}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
          defaultValue={""}
        />
          </label>
          <div
      className="max-w-md"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="file"
          value="Upload file"

        />
      </div>
      <FileInput
        helperText="A profile picture is useful to confirm your are logged into your account"
        name="file"
      />
    </div>
      <button
        type="submit"
        
        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Send message
      </button>
    </form>
  </div>
</section>
          <Head>
        <title>聯繫-雙龍體育</title>
        <meta name="description" content="為了幫助您更好地解決任何雙龍體育的問題，我們在此提供一個聯繫我們的專門渠道。立刻上聯繫-雙龍體育" />
      </Head>
  
      </div>
  )
}

export default c

