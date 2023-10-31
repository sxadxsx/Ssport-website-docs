import Head from 'next/head'
import styles from './components/Button.module.css';
function chat() {
  return (   
        <div>
 <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
      <span className={styles.abc}>機器人</span>
      幫助系統
    </h2>
    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
      有任何問題，立刻詢問機器人
    </p>
          <iframe
  src="https://ssportbotview.vercel.app/customer-support-q6zv3pv"
  width="100%"
  height={100}
></iframe>
</section>
</div>
          </div>
  )
}

export default chat
