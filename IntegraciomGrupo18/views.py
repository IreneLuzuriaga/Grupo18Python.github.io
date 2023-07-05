from django.views.generic import TemplateView

class IndexPage(TemplateView):
    template_name = "index.html"

class Contacto(TemplateView):
    template_name = "contact.html"

class Producto(TemplateView):
    template_name = "produc.html"

class Sucursales(TemplateView):
    template_name = "sucur.html"


