import './FivthSection.css';
import elephant from './elephant.webp';

export default function FivthSection() {
    return (
        <section id='fivth' className='fivth'>
            <div className='content'>
                <div className="img">
                    <img src={elephant} alt="" />
                </div>
                <div className="description">
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, quod?</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi accusantium et quo odio dolore tempore totam sapiente ad obcaecati, aliquid, incidunt saepe. Molestiae neque eum itaque, quidem porro rerum, excepturi esse labore, accusantium odit optio officia nihil distinctio possimus dolore blanditiis expedita illum ipsa velit minus minima fuga modi! Quos!</p>
                </div>
            </div>
        </section>
    )
}