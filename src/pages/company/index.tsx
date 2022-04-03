import Image from 'next/image';
import React from 'react';
import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';
import { SEO } from '@components/SEO';
import SectionHeader from '@components/SectionHeader';

const Company = () => {
  return (
    <Layout>
      <SEO
        pageTitle='株式会社橋市 | 会社概要'
        pageDescription='株式会社橋市の会社概要をご案内いたします。'
      />
      <Image src='/images/hashiich.jpg' alt='hashiichi' width={1280} height={700} className='' />
      <PageHeader title='会社概要' />
      <table className='my-5 w-full table-auto'>
        <tbody>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>会社名</td>
            <td className='py-2 px-4 border-y'>株式会社 橋市</td>
          </tr>

          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>代表者</td>
            <td className='py-2 px-4 border-y'>谷藤　大樹</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>主な取扱品目</td>
            <td className='py-2 px-4 border-y'>
              包装資材・梱包資材・厨房機器類・食器・道具・洗剤類・容器パック・事務機器・文具・省力機器など
            </td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>資本金</td>
            <td className='py-2 px-4 border-y'>3,000万円</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>設立</td>
            <td className='py-2 px-4 border-y'>昭和28年3月（創業 明治2年）</td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>取引銀行</td>
            <td className='py-2 px-4 border-y'>岩手銀行・北日本銀行・東北銀行</td>
          </tr>
        </tbody>
      </table>
      <PageHeader title='営業所' />
      <SectionHeader title='本社' />
      <table className='my-5 w-full table-auto'>
        <tbody>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>住所</td>
            <td className='py-2 px-4 border-y'>
              〒020-0033
              <br />
              岩手県盛岡市盛岡駅前北通り7-17
            </td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>電話番号</td>
            <td className='py-2 px-4 border-y'>019-624-0841</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>FAX番号</td>
            <td className='py-2 px-4 border-y'>019-651-0557</td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>定休日</td>
            <td className='py-2 px-4 border-y'>毎月第3日曜日 ※年末年始・お盆はお休みいたします</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>営業時間</td>
            <td className='py-2 px-4 border-y'>店舗1F、2F 平日10時〜18時/土日祝日10時〜16時</td>
          </tr>
        </tbody>
      </table>
      <SectionHeader title='南店・配送センター' />
      <table className='my-5 w-full table-auto'>
        <tbody>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>住所</td>
            <td className='py-2 px-4 border-y'>
              〒020-0838
              <br />
              岩手県盛岡市津志田中央3-26-55
            </td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>電話番号</td>
            <td className='py-2 px-4 border-y'>019-638-8410</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>FAX番号</td>
            <td className='py-2 px-4 border-y'>019-637-0396</td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>定休日</td>
            <td className='py-2 px-4 border-y'>土日祝日 ※年末年始・お盆はお休みいたします</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>営業時間</td>
            <td className='py-2 px-4 border-y'>平日18時〜16時</td>
          </tr>
        </tbody>
      </table>
      <SectionHeader title='水沢支店' />
      <table className='my-5 w-full table-auto'>
        <tbody>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>住所</td>
            <td className='py-2 px-4 border-y'>
              〒023-0036
              <br />
              岩手県奥州市水沢北栗林58-1
            </td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>電話番号</td>
            <td className='py-2 px-4 border-y'>0197-24-9841</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>FAX番号</td>
            <td className='py-2 px-4 border-y'>0197-24-9810</td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>定休日</td>
            <td className='py-2 px-4 border-y'>日曜祝日 ※年末年始・お盆はお休みいたします</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>営業時間</td>
            <td className='py-2 px-4 border-y'>平日10時〜17時/土曜日10時〜16時</td>
          </tr>
        </tbody>
      </table>
      <SectionHeader title='八戸支店' />
      <table className='my-5 w-full table-auto'>
        <tbody>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>住所</td>
            <td className='py-2 px-4 border-y'>
              〒031-0071
              <br />
              青森県八戸市沼館1-21-1
            </td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>電話番号</td>
            <td className='py-2 px-4 border-y'>0178-45-4802</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>FAX番号</td>
            <td className='py-2 px-4 border-y'>0178-45-4803</td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>定休日</td>
            <td className='py-2 px-4 border-y'>日曜祝日 ※年末年始・お盆はお休みいたします</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>営業時間</td>
            <td className='py-2 px-4 border-y'>平日10時〜17時/土曜日10時〜16時</td>
          </tr>
        </tbody>
      </table>
      <SectionHeader title='盛岡中央卸売市場店' />
      <table className='my-5 w-full table-auto'>
        <tbody>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>住所</td>
            <td className='py-2 px-4 border-y'>
              〒020-8567
              <br />
              岩手県盛岡市羽場10-100-3
              <br />
              盛岡市中央御売市場ビッグプロ内
            </td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>電話番号</td>
            <td className='py-2 px-4 border-y'>019-614-1928</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>FAX番号</td>
            <td className='py-2 px-4 border-y'></td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>定休日</td>
            <td className='py-2 px-4 border-y'>
              日祝日・休市水曜日 ※年末年始・お盆はお休みいたします
            </td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>営業時間</td>
            <td className='py-2 px-4 border-y'>平日・土曜日 6時〜11時</td>
          </tr>
        </tbody>
      </table>
      <PageHeader title='グループ会社' />
      <SectionHeader title='株式会社 橋市物産' />
      <table className='my-5 w-full table-auto'>
        <tbody>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>住所</td>
            <td className='py-2 px-4 border-y'>
              〒020-0033
              <br />
              岩手県盛岡市盛岡駅前北通1-10
            </td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>電話番号</td>
            <td className='py-2 px-4 border-y'>019-654-4212</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>FAX番号</td>
            <td className='py-2 px-4 border-y'>019-654-4286</td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>事業内容</td>
            <td className='py-2 px-4 border-y'>
              各種贈答品・スポーツイベント用品・広報イベント・キャンペーン用品・オフィス家具用品の卸売及び小売
            </td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>WEBサイト</td>
            <td className='py-2 px-4 border-y'>
              <a href='http://www.cr841.com/' className='font-bold text-indigo-600'>
                橋市物産
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <SectionHeader title='有限会社 橋市倉庫' />
      <table className='my-5 w-full table-auto'>
        <tbody>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>住所</td>
            <td className='py-2 px-4 border-y'>
              〒020-0033
              <br />
              岩手県盛岡市盛岡駅前北通7-17
            </td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>電話番号</td>
            <td className='py-2 px-4 border-y'>019-623-1154</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>FAX番号</td>
            <td className='py-2 px-4 border-y'></td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>事業内容</td>
            <td className='py-2 px-4 border-y'>不動産・賃貸業・マンション・テナント</td>
          </tr>
        </tbody>
      </table>
      <SectionHeader title='盛岡リフレッシュスポーツ 株式会社' />
      <table className='my-5 w-full table-auto'>
        <tbody>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>住所</td>
            <td className='py-2 px-4 border-y'>
              〒020-0033
              <br />
              岩手県盛岡市盛岡駅前北通7-17
            </td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>電話番号</td>
            <td className='py-2 px-4 border-y'>019-623-1154</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>FAX番号</td>
            <td className='py-2 px-4 border-y'></td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>事業内容</td>
            <td className='py-2 px-4 border-y'>スポーツ施設の運営（会員制のアスレチッククラブ）</td>
          </tr>
        </tbody>
      </table>
      <SectionHeader title='有限会社 橋市武道具センター' />
      <table className='my-5 w-full table-auto'>
        <tbody>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>住所</td>
            <td className='py-2 px-4 border-y'>
              〒020-0033
              <br />
              岩手県盛岡市盛岡駅前北通7-10
            </td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>電話番号</td>
            <td className='py-2 px-4 border-y'>019-654-3037</td>
          </tr>
          <tr>
            <td className='py-2 px-4 w-1/4 text-center border-y'>FAX番号</td>
            <td className='py-2 px-4 border-y'></td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='py-2 px-4 w-1/4 text-center border-y'>事業内容</td>
            <td className='py-2 px-4 border-y'>
              スポーツ用品・武道具の販売・運動器具の修理・教材全般図書類の販売
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Company;
