INSERT INTO "USERS" ("fullName", "password", "email", "Role") VALUES ('administrador', '$2b$14$QmEevhZnqUwrSyb/mUhRq.qFNUwB8.wVmw6dpwtWd9y.wSFHLQHKa', 'admin@gmail.com', 'ADMIN');

INSERT INTO "PRODUCTS" ("name", "price", "description", "imageUrl") 
    VALUES 
        ('Kit para barba', '25', 'Incluye aceite de argán, crema rasuradora y una cuchilla de afeitar de acero quirúrgico, para que te consientas como más lo mereces.','http://res.cloudinary.com/imagenes-pg/image/upload/v1659582376/wdp833fvx2bj51m4eq9c.jpg'),
        ('Shampoo para barba', '10', 'Cuida tu barba con este shampoo anti resequedad para que brindes la mejor salud a tu barba.','http://res.cloudinary.com/imagenes-pg/image/upload/v1659592281/yvvo3qfddykzxg6r7jno.jpg'),
        ('Tónico para barba', '15', 'Bríndale brillo y vitalidad a tu barba con este tónico hecho de ingredientes naturales','http://res.cloudinary.com/imagenes-pg/image/upload/v1659592324/zdmvgcskdbxj8ikhddsw.jpg'),
        ('Peine para barba', '8', 'Dale a tu barba el toque más sutil y elegante con este peine clásico de barba hecho de material de alta calidad."','http://res.cloudinary.com/imagenes-pg/image/upload/v1659592367/sv9xmm2e17zxya9odv2t.jpg'),
        ('Kit de peines', '20', 'Para cualquier tipo de cabello y ocasión, este kit de peines puede ser tu gran aliado a la hora de tratar tu cabello.','http://res.cloudinary.com/imagenes-pg/image/upload/v1659592402/c69gqorum4nt1xf2l0l5.jpg'),
        ('Secador profesional', '60', 'Perfecciona y moldea tu look con este secador profesional de alta calidad.','http://res.cloudinary.com/imagenes-pg/image/upload/v1659592923/tvoj68f9k9hfhmpmpnaa.jpg');
        
INSERT INTO "BARBERS" ("name", "lastName", "description", "imageUrl")
    VALUES
        ('Jesus', 'Valle', 'Experto en cortes de cabello modernos, diseño de cejas y barba para dar un look sutil y moderno a sus clientes', 'http://res.cloudinary.com/imagenes-pg/image/upload/v1659732780/a8vxx8qmkjyfjte6h6fd.jpg'),
        ('Victor', 'Valdés', 'Especializado en cortes de barba clásicos, tintes y peinados para toda tipo de ocasiones.', 'http://res.cloudinary.com/imagenes-pg/image/upload/v1659732843/vbsgmj6vq8cslhhwfcpi.jpg'),
        ('Joaquin', 'Guzmán', 'Profesional en cortes, tinturas y mascarillas para la cara, brindando así un servicio completo a sus clientes.', 'http://res.cloudinary.com/imagenes-pg/image/upload/v1659732876/syef0w30fyeoolgfio9q.jpg')