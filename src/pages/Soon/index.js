import { motion } from "framer-motion"

export const ComingSoon = () => {
    const fontStyle = {
        fontSize: 5+"em",
        fontWeight: 100,
        color: '#FFF',
        textTransform: 'uppercase',
        wordSpacing: 10+"rem"
    }

    const divStyle = {
        width: 100+"%",
        height: 100+"%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <>
            <main>
                <div style={divStyle}>
                    <motion.span
                        style={fontStyle}
                        initial={{ y: '-110vh' }}
                        animate={{ y: '0' }}
                        transition={{ 
                            delay: 0.3,
                            type: 'spring',
                            duration: 0.8,
                            bounce: 0.5
                        }}
                    >
                        Coming
                    </motion.span>
                    <motion.span
                        style={fontStyle}
                        initial={{ y: '110vh' }}
                        animate={{ y: '0' }}
                        transition={{ 
                            delay: 0.8,
                            type: 'spring',
                            duration: 1,
                            bounce: 0.3
                        }}
                    >
                        Soon
                    </motion.span>
                </div>
            </main>
        </>
    )
}