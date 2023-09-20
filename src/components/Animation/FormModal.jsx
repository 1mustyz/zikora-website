import React from 'react';
import Modal from '@mui/material/Modal';
import { motion, AnimatePresence } from "framer-motion"



function FormModal({ open, handleClose, children}) {
    
      const modalMainAnimVariant = {
        hidden: {opacity: 0},
        vissible: {
            opacity: [0.2,0.5,0.8,1],
            transition: {
                duration: 0.5, 
                ease: 'easeIn',
                when: 'beforeChildren'
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1, 
                ease: 'easeOut',
                when: 'afterChildren'
            }
        },    
      }
      const childContentVariant = {
        hidden: {opacity: 0},
        vissible: {
            opacity: 1,
            transition: {
                duration: 0.5, 
                ease:'linear'
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5, 
                ease:'linear'
            }, 
        }       
      }

    return (
        <AnimatePresence>
            {open && <Modal
            component={motion.div}
            variants={modalMainAnimVariant}
            initial={"hidden"}
            animate={"vissible"}
            exit="exit"
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"

            >
                <AnimatePresence>
                    {open && <motion.div variants={childContentVariant}>
                        {children}
                    </motion.div>}
                </AnimatePresence>
            </Modal>}
        </AnimatePresence>
    )
}

export default FormModal


// 