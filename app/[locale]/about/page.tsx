import { useTranslations } from "next-intl"

const page = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const t = useTranslations('About')

    return (
        <div>{t('title')}</div>
    )
}

export default page
