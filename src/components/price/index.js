import cx from 'classnames';
import { FastField } from 'formik';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './price.module.css';

function getDiscountPrice(price, plan) {
  const discount =
    plan && plan === "2 měsíce" ? 5 : plan && plan === "3 měsíce" ? 8 : null
  return (price - price * (discount / 100)).toFixed()
}

function getDiscountPricePerPortion(price, plan) {
  const discountPortion = plan && plan === "2 týdny" ? 5 : plan
  return ((price - price * (discountPortion / 100)).toFixed() / 5).toFixed()
}

export const Price = ({ price = 0, oldPrice, plan = null }) => {
  const [discountPrice, setDiscountPrice] = useState(null)
  const [discountPortionPrice, setDiscountPortionPrice] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    const discountPriceValue = getDiscountPrice(price, plan)
    setDiscountPrice(discountPriceValue)
    const discountPortionPriceValue = getDiscountPricePerPortion(price, plan)
    setDiscountPortionPrice(discountPortionPriceValue)
  }, [price, oldPrice, plan])

  return (
    <div className={styles.price}>
      <div className={styles.priceCol}>
        <h5 className={styles.priceTitle}>{t("forms.priceTitlePart1")}</h5>
        <p className={styles.priceText}>{t("forms.priceTitlePart2")}</p>
      </div>
      <div className={cx(styles.priceCol, styles.priceColRight)}>
        <div className={styles.priceValue}>
          <span id="price">{price ? price : "420"}</span> Kč
        </div>
        <div style={{ textDecoration: "line-through" }}>
          {oldPrice && `${oldPrice} Kč`}
        </div>
        {/* {plan === "2 týdny" && (
          <div className={styles.priceDiscountValue}>
            <span id="discountPrice">
              {discountPrice ? discountPrice : "400"}
            </span>{" "}
            Kč
          </div>
        )} */}
      </div>
      {/* <div className={cx(styles.priceCol, styles.discountCol)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M22.4044 12.3108C22.3079 12.1132 22.3079 11.8866 22.4044 11.6891L23.2995 9.85795C23.7979 8.83838 23.403 7.62316 22.4006 7.09127L20.6001 6.13596C20.4059 6.03293 20.2727 5.84956 20.2347 5.63304L19.8826 3.62544C19.6865 2.50767 18.6525 1.75655 17.5291 1.9155L15.511 2.20097C15.2931 2.23172 15.0778 2.16169 14.9197 2.00883L13.4549 0.591712C12.6392 -0.197377 11.3614 -0.197424 10.5458 0.591712L9.08084 2.00897C8.92278 2.16188 8.70739 2.23177 8.48961 2.20111L6.47151 1.91564C5.34769 1.7566 4.3141 2.50781 4.11802 3.62559L3.7659 5.63309C3.72788 5.84965 3.59471 6.03298 3.40051 6.13605L1.60005 7.09136C0.59759 7.6232 0.202717 8.83852 0.701089 9.8581L1.59616 11.6892C1.69272 11.8868 1.69272 12.1134 1.59616 12.3109L0.701042 14.142C0.20267 15.1616 0.597543 16.3768 1.60001 16.9087L3.40046 17.864C3.59471 17.967 3.72788 18.1504 3.7659 18.3669L4.11802 20.3745C4.29652 21.3921 5.16905 22.1057 6.17184 22.1056C6.2706 22.1056 6.37082 22.0987 6.47156 22.0844L8.48965 21.799C8.70729 21.7681 8.92282 21.8382 9.08088 21.9911L10.5458 23.4082C10.9537 23.8028 11.4769 24.0001 12.0003 24C12.5236 24 13.0471 23.8027 13.4548 23.4082L14.9197 21.9911C15.0778 21.8382 15.2932 21.7684 15.511 21.799L17.5291 22.0844C18.653 22.2434 19.6865 21.4923 19.8826 20.3745L20.2347 18.367C20.2727 18.1504 20.4059 17.9671 20.6001 17.864L22.4006 16.9087C23.403 16.3769 23.7979 15.1615 23.2995 14.142L22.4044 12.3108ZM21.7518 15.6859L19.9513 16.6412C19.3773 16.9458 18.9836 17.4876 18.8713 18.1277L18.5192 20.1353C18.4529 20.5135 18.1032 20.7675 17.7229 20.7138L15.7048 20.4283C15.0613 20.3372 14.4244 20.5443 13.9573 20.9961L12.4924 22.4132C12.2165 22.6801 11.7842 22.6801 11.5082 22.4132L10.0433 20.9961C9.64849 20.6142 9.1324 20.4073 8.59362 20.4073C8.4949 20.4073 8.39539 20.4142 8.29573 20.4283L6.27764 20.7138C5.89767 20.7675 5.54775 20.5134 5.48137 20.1352L5.1292 18.1276C5.01689 17.4875 4.62324 16.9457 4.04916 16.6411L2.24871 15.6858C1.90952 15.5059 1.77593 15.0948 1.94453 14.7498L2.83965 12.9186C3.12503 12.3348 3.12503 11.6651 2.83965 11.0812L1.94453 9.25008C1.77593 8.90513 1.90952 8.49399 2.24871 8.31404L4.04916 7.35874C4.62319 7.0541 5.01689 6.51232 5.12916 5.8722L5.48128 3.86465C5.54766 3.48646 5.89725 3.2324 6.27754 3.28612L8.29564 3.57159C8.93899 3.66266 9.57607 3.45562 10.0432 3.00379L11.5081 1.58668C11.784 1.31977 12.2163 1.31977 12.4923 1.58668L13.9572 3.00379C14.4243 3.45566 15.0613 3.66266 15.7048 3.57159L17.7229 3.28612C18.1029 3.23235 18.4528 3.48646 18.5191 3.86465L18.8712 5.87224C18.9835 6.51237 19.3772 7.05419 19.9513 7.35874L21.7517 8.31404C22.0909 8.49399 22.2245 8.90513 22.0559 9.25008L21.1608 11.0812C20.8754 11.665 20.8754 12.3348 21.1608 12.9186L22.0559 14.7497C22.2246 15.0948 22.091 15.5059 21.7518 15.6859Z"
              fill="white"
            />
            <path
              d="M17.0571 6.94288C16.7869 6.6726 16.3486 6.6726 16.0783 6.94288L6.94294 16.0783C6.67266 16.3486 6.67266 16.7868 6.94294 17.0571C7.07808 17.1922 7.25522 17.2598 7.43232 17.2598C7.60941 17.2598 7.7866 17.1923 7.92169 17.0571L17.0571 7.92172C17.3274 7.65139 17.3274 7.21321 17.0571 6.94288Z"
              fill="white"
            />
            <path
              d="M9.23209 5.77106C7.83278 5.77106 6.69434 6.9095 6.69434 8.30881C6.69434 9.70811 7.83278 10.8466 9.23209 10.8466C10.6314 10.8466 11.7698 9.70811 11.7698 8.30881C11.7698 6.9095 10.6314 5.77106 9.23209 5.77106ZM9.23209 9.4623C8.59604 9.4623 8.07859 8.94485 8.07859 8.30876C8.07859 7.67272 8.59604 7.15527 9.23209 7.15527C9.86813 7.15527 10.3856 7.67272 10.3856 8.30876C10.3856 8.94485 9.86813 9.4623 9.23209 9.4623Z"
              fill="white"
            />
            <path
              d="M14.7687 13.1535C13.3694 13.1535 12.231 14.292 12.231 15.6913C12.231 17.0906 13.3694 18.229 14.7687 18.229C16.168 18.229 17.3065 17.0906 17.3065 15.6913C17.3065 14.292 16.168 13.1535 14.7687 13.1535ZM14.7687 16.8447C14.1327 16.8447 13.6152 16.3273 13.6152 15.6913C13.6152 15.0552 14.1326 14.5378 14.7687 14.5378C15.4048 14.5378 15.9222 15.0552 15.9222 15.6913C15.9222 16.3273 15.4048 16.8447 14.7687 16.8447Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div> */}
    </div>
  )
}
